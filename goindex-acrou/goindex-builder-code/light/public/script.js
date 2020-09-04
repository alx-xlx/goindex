var clipboard = new ClipboardJS("#copy");

clipboard.on("success", function(e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);

  e.clearSelection();
});

clipboard.on("error", function(e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
});

var app = new Vue({
  data: {
    loading: false,
    cacheKey: "goindex_options",
    options: {
      authCode: "",
      siteName: "",
      driveId: "root",
      roots: [
        {
          id: "root",
          name: "",
          user: "",
          pass: ""
        }
      ],
      head_md: false,
      readme_md: false,
      desc: false,
      languages: "en",
      enable_password_file_verify: false,
      enable_cors_file_down: false,
      remember: false
    },
    result: {
      status: "",
      content: "",
      message: ""
    }
  },
  watch: {
    "options.remember"(val) {
      if (!val) {
        localStorage.removeItem(this.cacheKey);
      }
    }
  },
  created() {
    this.getCache();
  },
  computed: {},
  methods: {
    addRoot() {
      this.options.roots.push({});
    },
    delRoot(index) {
      this.options.roots.splice(index, 1);
    },
    getCode() {
      this.loading = true;
      let vm = this;
      fetch("/getCode", {
        body: JSON.stringify(this.options),
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => response.json())
        .then(function(data) {
          vm.loading = false;
          vm.result = data;
          if (vm.options.remember) {
            vm.setCache();
          }
        });
    },
    setCache() {
      localStorage.setItem(
        this.cacheKey,
        JSON.stringify({ ...this.options, authCode: "" })
      );
    },
    getCache() {
      let data = localStorage.getItem(this.cacheKey);
      if (data) {
        this.options = JSON.parse(data);
      }
    }
  }
}).$mount("#app");
