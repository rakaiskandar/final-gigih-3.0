## Tokopedia Play Clone Final Project Generasi GIGIH 3.0

Tokopedia Play Clone is web application that cloned web application Tokopedia Play using MERN Stack (MongoDB, Express, React, Nodejs).

![alt text](./public/tokopedia%20play%20clone%20preview.png)
## About the project

This repository project made for fulfillment task final assesment in Generasi GIGIH 3.0 Program.

## Features
- Retrieve all videos in youtube from youtube id (provided by db)
- Display detail videos and play the videos from youtube
- Post comments in video (not realtime comments and must input username)
- Retrieve list of products in detail videos
- Search videos by title
- Skeleton loader in page
- Responsive design (mobile or tablet support)

## Bonus Features
- Search videos by title
- Skeleton loader
- Resppnsive design

## Run Locally

Clone the project

```bash
git clone https://github.com/rakaiskandar/final-gigih-3.0.git
```

Go to the project directory

```bash
cd tokopedia-play-clone
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Project Structure
```tree
|___src
    |___assets
    |___components
    |___configs
    |   |__api
    |___helpers
    |___hooks   
    |___page
    |   |__app   
    |__App.jsx
    |__index.css
    |__main.jsx
.env
.gitignore
index.html
```

Folder structure that used for react project:

- `src: root folder for rendering source code`
- `assets: for assets such as fonts or image thae used in app`
- `components: root folder for component`
- `configs: root folder for endpoint api`
- `helpers: provide utility function`  
- `hooks: provide custom hooks`
- `page: root folder for each page`
- `App.jsx: handle routing page`
- `index.css: global styling css`
- `main.jsx: entry point react app`
- `.env: environment variable dev or prod`
- `.gitignore: for git push`
- `index.html: root file that render`

## Page
- `/`: Homepage of this app for display list of videos with thumbnail
- `/channels/:id`: Detail video that includes product, and comment related to the videos
- `/search`: Page for search videos

## Improvement Features
- Implement user authentication, authorization, multiple role 
- Implement web socket for real time post comments
- Implement storage file to upload video (AWS/Firebase) 