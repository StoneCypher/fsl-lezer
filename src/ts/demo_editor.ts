
import { EditorView, basicSetup } from "codemirror"
import { fsl }                    from './fsl';

let editor = new EditorView({
  extensions : [basicSetup, fsl()],
  parent     : document.body
});
