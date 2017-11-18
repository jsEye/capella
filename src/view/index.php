<!DOCTYPE html>
<html lang="en-us">
    <head>
        <title>Main</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="../public/build/bundle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </head>
    <body>
        <div class="capella">
            <div class="capella__drag-n-drop">
                <div class="capella__contents">
                    <div class="capella__logo">
                        <img src="../public/app/svg/capella-logo.svg">
                    </div>
                    <div class="capella__uploading">
                        <div class="capella__uploading-title">Uploading</div>
                        <progress max="100" value="70" class="capella__uploading-progress"></progress>
                        <a href="" class="capella__uploading-link">Pasted image at 2017_10_17 09_27 PM.png</a>
                    </div>
                    <div class="capella__dark-contents">
                        <p>Upload file directly using drag-n-drop or clipboard. You will instantly get link to your file.</p>
                        <button id="uploadFileButton" class="capella__button">Select picture</button><br>
                        <input id="uploadLinkField" type="text" class="capella__input" placeholder="Paste URL"/>
                    </div>
                    <div class="capella__drag-n-drop-activator">
                        <img src="../public/app/svg/cloud-computing.svg">
                        Drop file to upload
                    </div>
            </div>
        </div>
        <script src="/public/build/bundle.js?v=<?= filemtime('public/build/bundle.js') ?>" onload="capella.init();"></script>
    </body>
</html>
