## contact-list

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


----------------------------------------------------------
Create a contactlist custom list in your sharepoint team collection with Id,ContactName,Company,Designation,Location,Image (for image url) columns.

run gulp serve

and open the workbrnch in your tenant url:
<tenant_url>/_layouts/15/workbench.aspx

It should fetch data from your sharepoint contact list

You also need to put the images in an image folder in your sharepoint document library and fetch the full url in image url column

