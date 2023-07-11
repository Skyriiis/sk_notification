const Announce = {
  init() {
    this.hideTimeout = null;

    this.el = document.querySelector(".announce");

    this.title = document.createElement("div");
    this.title.className = "title";
    this.title.textContent = "Notification";

    this.divider = document.createElement("div");
    this.divider.className = "divider";

    this.desc = document.createElement("div");
    this.desc.className = "desc";
    this.desc.innerHTML = "nunc lobortis mattis aliquam faucibus purus in";

    document
      .querySelector(".announce .wrapper .container")
      .appendChild(this.title);
    document
      .querySelector(".announce .wrapper .container")
      .appendChild(this.divider);
    document
      .querySelector(".announce .wrapper .container")
      .appendChild(this.desc);
  },
  show(message, duration) {
    clearTimeout(this.hideTimeout);

    this.el.classList.remove("announce-visible");
    setTimeout(() => {
      this.el.classList.add("announce-visible");
      this.desc.innerHTML = message;
    }, 300);

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("announce-visible");
    }, duration);
  },
};

const Notification = {
  show(message, duration) {
    this.hideTimeout = null;

    this.el = document.createElement("div");
    this.el.className = "notification";

    const id = Math.random().toString(36).slice(2);
    this.el.setAttribute("id", id);

    this.divider = document.createElement("div");
    this.divider.className = "divider";

    this.title = document.createElement("div");
    this.title.className = "title";
    this.title.textContent = "Notification";

    this.desc = document.createElement("div");
    this.desc.className = "desc";
    this.desc.innerHTML = message;

    document.querySelector(".notify .container .wrapper").append(this.el);

    this.el.appendChild(this.divider);
    this.el.appendChild(this.title);
    this.title.appendChild(this.desc);

    setTimeout(() => {
      this.el.classList.add("notification-visible");
    }, 10);

    var notis;
    setTimeout(() => {
      document.getElementById(id).classList.remove("notification-visible");
      setTimeout(() => {
        document.getElementById(id).remove();
        notis = document.querySelectorAll(
          ".notify .container .wrapper .notification"
        );
      }, 500);
    }, duration);

    notis = document.querySelectorAll(
      ".notify .container .wrapper .notification"
    );
  },
};
