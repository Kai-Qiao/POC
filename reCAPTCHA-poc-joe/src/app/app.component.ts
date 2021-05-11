import { Component, OnInit  } from '@angular/core';
import DiffMatchPatch from 'diff-match-patch';
import * as jsdiff from 'diff'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reCAPTCHA-poc-joe';

  ngOnInit() {
  }
 
  getDiff() {
    var dmp = new DiffMatchPatch();
    var diff = dmp.diff_main(this.oldText, this.newText);
    // Result: [(-1, 'Hell'), (1, 'G'), (0, 'o'), (1, 'odbye'), (0, ' World.')];
    // console.log(diff);
    // dmp.diff_cleanupSemantic(diff);
    // Result: [(-1, 'Hello'), (1, 'Goodbye'), (0, ' World.')];
    console.log(diff);
  }

  public oldText = 'apples\noranges\nkiwis\ncarrotsssstatic\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\ncarrots\n';


  testDiff(){
    
    const diff = jsdiff.diffLines(this.oldText, this.newText)
    
    // diff.forEach((part) => {
    //   // green for additions, red for deletions
    //   // grey for common parts
    //     const color = part.added ? 'green' :
    //       part.removed ? 'red' : 'grey';
    //     process.stderr.write(part.value[color]);
    // });

    console.log(diff);
  }


}
