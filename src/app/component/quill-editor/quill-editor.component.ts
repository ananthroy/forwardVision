import { Component , ElementRef, OnInit, ViewChild} from '@angular/core';
declare var Quill: any;
@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit {
  @ViewChild('quillEditor', { static: true })
  quillEditorRef!: ElementRef;
  private quillEditor: any;

  constructor() { }

  ngOnInit(): void {
    this.quillEditor = new Quill(this.quillEditorRef.nativeElement, {
      theme: 'snow',
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.readFileContent(file);
    }
  }

  private readFileContent(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const docContent = e.target.result;
      this.insertDocContent(docContent);
    };

    reader.readAsText(file);
  }

  private insertDocContent(docContent: string) {
    // Assuming you have a specific Quill module or format to handle DOC content
    // You may need to parse the DOC content and format it appropriately
    // For example, you can use a custom Quill module or HTML conversion library
    // to handle the DOC content and insert it into the Quill editor.

    // Insert the parsed content into the Quill editor
    this.quillEditor.clipboard.dangerouslyPasteHTML(docContent);
  }

  uploadDoc() {
    // You can add additional logic here to handle the uploaded DOC file
    // For example, you might want to send it to a server for further processing.
  }
}
