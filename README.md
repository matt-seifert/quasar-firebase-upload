# quasar-firebase-upload
 A working, barebones project showing implementation of user razbakov's QFirebaseUploader component. Original found here: https://gist.github.com/razbakov/378caedba3f24e3d8336442182528719

I created the project with the Quasar CLI using default options, and added firebase to the project.  You will simply need to replace the dummy values in boot/firebase.js with your own firebase credentials.

QFirebaseUploader is simply an extension of the QUploader component (https://quasar.dev/vue-components/uploader), except instead of the normally required url prop, you just pass in a "path" prop of type String that represents your targeted Firebase Storage folder, and should end in a slash, such as "quasar/" or "images/".  

ex:
```vue
<QFirebaseUploader
            path="quasar/"
            label="Restricted to images"
            multiple
            accept=".jpg, image/*"
          />
```          

Let me know if you have any issues.  Happy Quasarin'!
