const event = (element, native) => ({
    trigger: (name, detail) => {
        element.dispatchEvent(new CustomEvent(name, { detail }));
    },
    on: (eName, callback) => {
        const execEvent = (name) => {
            return element.addEventListener(name, (e) =>
                callback(native ? e : e.detail, e, name)    
            )
        }

        return execEvent(eName);
    }
});
event.on = (n, c, na, e) => event(e || window, na).on(n, c);
event.trigger = (n, d, e) => event(e || window).trigger(n, d);

export default event;