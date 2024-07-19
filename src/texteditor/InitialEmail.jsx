import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function InitialEmail() {
  return (
    <Editor
      apiKey='fqzuwll7ascld9x8g3841pclczljcxkx9twy3pmx7lwswiey'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}