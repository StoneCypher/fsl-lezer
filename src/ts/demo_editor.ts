
import { EditorView, basicSetup } from "codemirror"
import { fsl }                    from './fsl';





function bootstrap() {

  const tgt = document.getElementById('editor_target');
  if (tgt === null) { throw new Error('No target for editor!'); }

  let editor = new EditorView({

    extensions : [basicSetup, fsl()],
    parent     : tgt

  });

}





export { bootstrap };
