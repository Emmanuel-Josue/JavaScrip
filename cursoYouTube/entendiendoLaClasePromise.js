class Promise {
  constructor(executor) {
    this.state = "pending"; // Pendiente
    this.value = undefined; // Valor indefinido
    this.onResolveCallbacks = []; // En resolver devolociones de llamada, array que guarda las soluciones favorables
    this.onRejectCallbacks = []; // En rechazar devoluciones de llamada

    // Función
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled"; //Cumplido / Se cambia el estado a cumplido
        this.value = value;
        //
        this.onResolveCallbacks.forEach((callback) => callback(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.onRejectCallbacks.forEach((callback) => callback(this.value));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const newPromise = new Promise((resolve, reject) => {
      const resolveHandler = (value) => {
        try {
          const result = onFulfilled(value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      const rejectHandler = (reason) => {
        try {
          const result = onRejected(reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        setTimeout(() => resolveHandler(this.value), 0);
      } else if (this.state === "rejected") {
        setTimeout(() => rejectHandler(this.value), 0);
      } else {
        this.onResolveCallbacks.push(resolveHandler);
        this.onRejectCallbacks.push(rejectHandler);
      }
    });

    return newPromise;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new Promise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new Promise((_, reject) => reject(reason));
  }
}
