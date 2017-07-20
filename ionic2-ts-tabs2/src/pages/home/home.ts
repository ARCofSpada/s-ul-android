import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FileChooser } from 'ionic-native'

import { FilePath } from 'ionic-native'

//Oh look now it doesn't compile, what a fucking piece of shit framework
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

//Missing TypeScript definition, can't use in ionic
//import { Permissions } from 'ionic-native'

//App does not compile with this
//import { Diagnostic } from 'ionic-native'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  onLink(url: string) {
      window.open(url);
  }

  testfunction()
  {
      //Diagnostic.requ
      /*Diagnostic.getPermissionAuthorizationStatus(Diagnostic.permission.READ_EXTERNAL_STORAGE).then((res) => {
          alert(res);
      }
      );*/
      //alert("This is a test message.")
      //p
      /*FileChooser.open(function(uri) {
	        alert(uri);
      });*/
      //Permissions.

      var requestURL = "https://s-ul.eu/api/v1/upload"
      var apiKey = ""
      //let callback: string;
      var callback;
      var realFilePath;
      //Is this Line Rider?
      FileChooser.open().then(callback => 
        {
          
            FilePath.resolveNativePath(callback).then(realFilePath =>
                {
                    alert(realFilePath);
                }
            )
        }
      )
      //alert("This is a test.");
  }

  upload2(filePath) {
      
      var ft = new FileTransfer;
      ft.upload()

  }

    upload(fileEntry) {
    // !! Assumes variable fileURL contains a valid URL to a text file on the device,
    var fileURL = fileEntry.toURL();

    var success = function (r) {
        console.log("Successful upload...");
        console.log("Code = " + r.responseCode);
        // displayFileData(fileEntry.fullPath + " (content uploaded to server)");
    }

    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    // SERVER must be a URL that can handle the request, like
    // http://some.server.com/upload.php
    ft.upload(fileURL, encodeURI(SERVER), success, fail, options);
};

}
