<script>
import { QUploaderBase } from 'quasar'
import { showErrorMessage } from '../functions/function-show-error-message'

import { storage } from '../boot/firebase.js'

export default {
  name: 'QFirebaseUploader',

  mixins: [QUploaderBase],

  props: {
    path: String
  },

  data () {
    return {
      uploading: false,
      uploadTasks: []
    }
  },

  computed: {
    // [REQUIRED]
    // we're working on uploading files
    isUploading () {
      return this.uploading
    },

    // [optional]
    // shows overlay on top of the
    // uploader signaling it's waiting
    // on something (blocks all controls)
    isBusy () {
      return this.uploading
    }
  },

  methods: {
    // [REQUIRED]
    // abort and clean up any process
    // that is in progress
    abort () {
      this.uploadTasks.forEach(uploadTask => {
        uploadTask.cancel()
      })

      this.uploading = false
    },

    // [REQUIRED]
    upload () {
      if (this.canUpload === false) {
        return
      }

      this.uploading = true

      this.files.forEach(file => {
        const datetime = new Date().toISOString().split('.')[0]
        const newRef = this.path + datetime + '_' + file.name
        const uploadTask = storage.ref(newRef).put(file)

        this.uploadTasks.push(uploadTask)

        uploadTask.on(
          'state_changed',
          snapshot => (this.uploadedSize += snapshot.bytesTransferred),
          error => {
            showErrorMessage(error.message)
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.$emit('upload', {
                url: downloadURL,
                name: file.name,
                uploadedDate: datetime
              })
              this.removeFile(file)
            })

            this.uploadedSize - this.uploadSize === 0 &&
              (this.uploading = false)
          }
        )
      })
    }
  }
}
</script>
