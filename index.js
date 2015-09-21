function Observable () {
    this.observers = [];
}
Observable.prototype.addObserver = function(observer) {
    this.observers.push(observer);
};
Observable.prototype.removeObserver = function(observer) {
    var that = this;
    this.observers.forEach(function(currentObserver, index) {
        if (currentObserver === observer) {
            that.observers = that.observers.splice(index, 1);
            return false;
        }
    });
};
Observable.prototype.notifyObservers = function() {
    var args = arguments;
    this.observers.forEach(function(observer) {
        observer.handleEvent.apply(observer, args);
    });
};

function Observer () {

}
Observer.prototype.handleEvent = function() {
};

module.exports.Observable = Observable;
module.exports.Observer = Observer;
