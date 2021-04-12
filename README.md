<div align="center">
<img src="https://i.imgur.com/Quwrp38.png" alt="goindex" height="">
</div>
<div align="center">

<img alt="goindex-license" src="https://img.shields.io/badge/Open_source-MIT-red.svg?logo=git&logoColor=green"/>
<img src="https://img.shields.io/github/last-commit/alx-xlx/goindex.svg?logo=Sublime+Text&logoColor=green&label=Active"/>
<img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/alx-xlx/goindex">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alx-xlx/goindex">
<img alt="goindex-softwareheritage.org" src="https://archive.softwareheritage.org/badge/origin/https://github.com/Unipisa/CMM/"/>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/alx-xlx/goindex">
<img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Falx-xlx%2Fgoindex&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Views&edge_flat=false"/>



</div>

---

Google Drive Directory Index  
Combining the power of [Cloudflare Workers](https://workers.cloudflare.com/) and [Google Drive](https://www.google.com/drive/) will allow you to index you files on the browser on Cloudflare Workers.    

`index.js` is the content of the Workers script.  



# Versions


## 1. [Aicirou/goindex-theme-acrou](https://github.com/Aicirou/goindex-theme-acrou)


Worker Script (Dark Mode) : [index.js](https://raw.githubusercontent.com/alx-xlx/goindex/master/goindex-acrou/go2index/index.js)

Worker Script (Multiple Google Accounts) : [index-multiple-accounts.js](https://raw.githubusercontent.com/alx-xlx/goindex/master/goindex-acrou/go2index/index-multiple-accounts.js)

Demo - [goindex.teamsdrives.workers.dev](https://goindex.teamsdrives.workers.dev)

Copy the [index.js](https://raw.githubusercontent.com/alx-xlx/goindex/master/goindex-acrou/go2index/index.js) script to [workers.dev](https://workers.cloudflare.com/) and edit `client_id`, `client_secret`, `refresh_token` with yours

OR

### GoIndex Auto Code Builder
https://goindex.glitch.me/

Simply visit [this](https://goindex.glitch.me/) Modified (only for Dark Mode) version to automatically generate your `index.js` without having to manually edit anything.

### [List View - Dark Mode](https://goindex.teamsdrives.workers.dev)
![goindex-list](https://i.imgur.com/Y9pJo1V.png)

### [Thumbnail View - Dark Mode](https://goindex.teamsdrives.workers.dev)
![goindex-thumbnail](https://i.imgur.com/crg4dGp.gif)

![goindex-awesome](https://i.imgur.com/JnEvGyg.gif)

### Toggle View
![goindex-toggle-view](https://i.imgur.com/RdvgfIf.png)


---
## 2. [maple3142/GDIndex](https://github.com/maple3142/GDIndex)
---
Worker Script - [index.js](https://github.com/alx-xlx/goindex/blob/2.0.8-darkmode-0.1/goindex-vue.js)

### Upload Files using CLI `gdindex_upload.py`
```py
## Python Example
import requests

# "upload: true" in the script
to_upload = "https://i.imgur.com/8w2KDrG.gif"
baseURL = "https://gdindex-dark.teamsdrives.workers.dev/"
# "folder1/folder2/goindex.gif"
# Subdirectories of Folder in Google Drive
fileName = "folder1/folder2/goindex.gif"
# Default teamDriveID is "root"
teamDriveID = "0ANCHcQq-8cmvUk9PVA"

URL = baseURL + "/" + fileName + "?rootId=" + teamDriveID + "&url=" + to_upload
r = requests.put(URL)
print(r.text)
```

Demo - [gdindex-dark.teamsdrives.workers.dev](https://gdindex-dark.teamsdrives.workers.dev/)
### [Demo - Dark Mode](https://gdindex-dark.teamsdrives.workers.dev/)
![](https://i.imgur.com/1uIQZr5.png)

## 3. donwa/goindex

Workers Script - [index.js](https://github.com/alx-xlx/goindex/blob/2.0.8-darkmode-0.1/goindex.js)

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

## Free Teamdrives
Get free Google Shared Drives

- [td.fastio.me](https://td.fastio.me)

- [td.hackgence.com](https://td.hackgence.com)

- [team.hackgence.com](https://team.hackgence.com)

## Quick Deployment  
1.Open https://goindex.glitch.me/  
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

## Credits - Original Authors

goindex-theme-acrou - [Aicirou](https://github.com/Aicirou/goindex-theme-acrou)

GDIndex - [maple3142](https://github.com/maple3142/GDIndex)

goindex - [donwa](https://github.com/donwa/goindex)

<div align="center">
<img src="https://i.imgur.com/jTGlxeV.png" alt="goindex" height="">
</div>