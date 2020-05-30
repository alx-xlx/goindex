// =======Options START=======
var authConfig = {
  siteName: "GoIndex", // 网站名称
  version: "dark-mode-0-1", // 程序版本 master or production or dev
  theme: "acrou",
  // Highly recommend using your own client_id and client_secret
  client_id: "202264815644.apps.googleusercontent.com",
  client_secret: "X4Z3ca8xfWDb1Voo-F9a7ZxJ",
  refresh_token: "", //  token
  /**
     * Set up multiple Drives to be displayed; add multiples by format
     * [id]: It can be team disk id, subfolder id, or "root" (representing the root directory of personal disk);
     * [name]: the displayed name
     * [user]: Basic Auth username
     * [pass]: Basic Auth password
     * [protect_file_link]: Whether Basic Auth is used to protect the file link, the default value (when not set) is false, that is, the file link is not protected (convenient for straight chain download / external playback, etc.)
     * Basic Auth of each disk can be set separately. Basic Auth protects all folders / subfolders in the disk by default
     * [Note] By default, the file link is not protected, which can facilitate straight-chain download / external playback;
     * If you want to protect the file link, you need to set protect_file_link to true. At this time, if you want to perform external playback and other operations, you need to replace host with user: pass @ host
     * No need for Basic Auth disk, just keep user and pass empty at the same time. (No need to set it directly)
     * [Note] For the disk whose id is set to the subfolder id, the search function will not be supported (it does not affect other disks).
  **/
  roots: [
    {
      id: "",
      name: "TeamDrive",
      pass: "",
    },
    {
      id: "root",
      name: "PrivateDrive",
      user: "",
      pass: "",
      protect_file_link: true,
    },
    {
      id: "",
      name: "folder1",
      pass: "",
    },
  ],
  default_gd: 0,
  /**
   * 文件列表页面每页显示的数量。【推荐设置值为 100 到 1000 之间】；
   * 如果设置大于1000，会导致请求 drive api 时出错；
   * 如果设置的值过小，会导致文件列表页面滚动条增量加载（分页加载）失效；
   * 此值的另一个作用是，如果目录内文件数大于此设置值（即需要多页展示的），将会对首次列目录结果进行缓存。
   */
  files_list_page_size: 50,
  /**
   * 搜索结果页面每页显示的数量。【推荐设置值为 50 到 1000 之间】；
   * 如果设置大于1000，会导致请求 drive api 时出错；
   * 如果设置的值过小，会导致搜索结果页面滚动条增量加载（分页加载）失效；
   * 此值的大小影响搜索操作的响应速度。
   */
  search_result_list_page_size: 50,
  // 确认有 cors 用途的可以开启
  enable_cors_file_down: false,
  /**
   * 上面的 basic auth 已经包含了盘内全局保护的功能。所以默认不再去认证 .password 文件内的密码;
   * 如果在全局认证的基础上，仍需要给某些目录单独进行 .password 文件内的密码验证的话，将此选项设置为 true;
   * 【注意】如果开启了 .password 文件密码验证，每次列目录都会额外增加查询目录内 .password 文件是否存在的开销。
   */
  enable_password_file_verify: false,
};