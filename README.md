![GoIndex](themes/logo.png)  
  
GoIndex  
====  
Google Drive Directory Index  
Combining the power of [Cloudflare Workers](https://workers.cloudflare.com/) and [Google Drive](https://www.google.com/drive/) will allow you to index you files on the browser on Cloudflare Workers.    

`index.js` is the content of the Workers script.  


# Versions



## 1. [Aicirou/goindex-theme](https://github.com/Aicirou/goindex-theme-acrou)

Worker Script (Dark Mode) : [index.js](https://github.com/alx-xlx/goindex/blob/dark-mode-0-1/goindex-acrou/go2index/index.js)

Demo - [goindex.teamsdrives.workers.dev](https://goindex.teamsdrives.workers.dev)

Copy the [index.js](https://github.com/alx-xlx/goindex/blob/dark-mode-0-1/goindex-acrou/go2index/index.js) script to [workers.dev](https://workers.cloudflare.com/) and edit `client_id`, `client_secret`, `refresh_token` with yours

OR

### GoIndex Auto Code Builder
https://goindex.glitch.me/

Simply visit [this](https://goindex.glitch.me/) Modified (only for Dark Mode) version to automatically generate your `index.js` without having to manually edit anything.

### List View - Dark Mode
![goindex-list](https://i.imgur.com/Y9pJo1V.png)

### Thumbnail View - Dark Mode
![goindex-thumbnail](https://i.imgur.com/crg4dGp.gif)

### Toggle View
![goindex-toggle-view](https://i.imgur.com/RdvgfIf.png)


---
## 2. [maple3142/GDIndex](https://github.com/maple3142/GDIndex)
---
Worker Script - [index.js](https://github.com/alx-xlx/goindex/blob/dark-mode-0-1/goindex-vue.js)

Demo - [gdindex-dark.teamsdrives.workers.dev](https://gdindex-dark.teamsdrives.workers.dev)

## 3. donwa/goindex

Workers Script - [index.js](https://github.com/alx-xlx/goindex/blob/dark-mode-0-1/goindex.js)

## Themes

### Demo Classic : [goindex-classic.teamsdrives.workers.dev](https://goindex-classic.teamsdrives.workers.dev)

![](https://i.imgur.com/lNeh3S3.png)

### Demo Material: [goindex-material.teamsdrives.workers.dev](https://goindex-material.teamsdrives.workers.dev)

![](https://i.imgur.com/jAq7Lsm.png)


## Deployment  
1.Install `rclone` software locally  
2.Follow [https://rclone.org/drive/]( https://rclone.org/drive/) bind a drive  
3.Execute the command`rclone config file` to find the file `rclone.conf` path  
4.Open `rclone.conf`,find the configuration `root_folder_id` and `refresh_token`  
5.Download index.js in https://github.com/donwa/goindex and fill in root and refresh_token  
6.Deploy the code to [Cloudflare Workers](https://www.cloudflare.com/)

## Quick Deployment  
1.Open https://installen.gd.workers.dev/  
2.Auth and get the code  
3.Deploy the code to [Cloudflare Workers](https://www.cloudflare.com/)  

# Optional
Use this when you want to host everything

## Get Google ClientID and SecretID
Log into the Google API Console [https://console.developers.google.com/] with your Google account. It doesn’t matter which Google account you use. (It need not be the same account as the Google Drive you want to access)

Select a project or create a new project.

Under “ENABLE APIS AND SERVICES” search for “Drive”, and enable the “Google Drive API”.

Click “Credentials” in the left-side panel (not “Create credentials”, which opens the wizard).

It will prompt you to set the OAuth consent screen product name, if you haven’t set one already.

OAuth Consent Screen > User Type > External > Application Name

Click “Credentials” in the left-side panel, then “Create credentials”, then “OAuth client ID”. 

Choose an application type of “other”, and click “Create”. (the default name is fine)

It will show you a client ID and client secret. Use these values in rclone config to add a new remote or edit an existing remote

## Setup rclone

Install `rclone` software locally  
Follow [https://rclone.org/drive/]( https://rclone.org/drive/) bind a drive

Use the `client_id` & `client_secret` while setup

Execute the command `rclone config file` to find the file `rclone.conf` path  

open rclone's config file, here we will find following Configurations (we will need these in next steps)
- client_id
- client_secret
- refresh_token
- ROOT_FOLDER (will be like 0AG1OSyxjvYcLUk9PVA)

## Setup Cloudfare Workers

Go to [https://workers.cloudflare.com/]

signup using email and password
enter a subdomain [____.workers.dev] ---> Set up

Choose Workers Plan (FREE)
- FREE - 10000 request/day
- $5/month - 10M requests/month
  
Verify Email
Goto Workers ---> "Create a Worker"

Now copy the Content of the `index.js` to the script section

Edit this object in the script with the details you generated above

```
var authConfig = {
    "siteName": "GoIndex", // Sitename
    "root_pass": "",  // root password, leave it blank if you don't want
    "version" : "1.0.6", // Program Version
    "hash" : "master", // master OR your HASH, do not leave blank (changes each time you make a commit)
    "theme" : "classic", // material  classic 
    "client_id": "****************************.apps.googleusercontent.com", // client_id from rclone config
    "client_secret": "*******************", // client_secret from rclone config
    "refresh_token": "******************************************", // authorized refresh token from rclone config
    "root": "0AG1OSyxjvYcLUk9PVA" // ROOT_FOLDER from rclone config,
};
```

### Important Note : 
- if you have binded Teamdrive with rclone then make sure you specify the TeamDrive's root folder.
Example - ["root": "0AG1OSyxjvYcLUk9PVA"]
- but if you want to use "My Drive" then simply write "root".
Example - ["root": "root"]
- Each time you make a commit to a file its HASH changes, so to access the new file you have to specify the hash OR keep it default `"hash" : "master"`


## Host src file in your own github repo
why ?

you can change the icon of the folders and files and much more 

replace the below line in head with yours
```
<USERNAME>
<REPOSITORY>
<VERSION or HASH>
</PATH/TO/FILE>
```
```
src="//cdn.jsdelivr.net/combine/gh/jquery/jquery/dist/jquery.min.js,gh/<USERNAME>/<REPOSITORY>@<VERSION or HASH>/PATH/TO/FILE.js"
```
Example :

```
src="//cdn.jsdelivr.net/combine/gh/jquery/jquery/dist/jquery.min.js,gh/alx-xlx/goindex@${authConfig.hash}/themes/${authConfig.theme}/app.js"
```

## Change Icons
SOON
https://www.w3.org/Icons/
https://www.w3.org/icons/
https://www.base64-image.de/

## About  
Cloudflare Workers allow you to write JavaScript which runs on all of Cloudflare's 150+ global data centers.  
