<script>
    import MarkdownIt from 'markdown-it';
    import mk from 'markdown-it-katex';
    // import * as hljs from 'highlight.js';

    import mithjs from 'markdown-it-highlight';

    import Axios from 'axios';
    import { selectedFile } from './_util/stores';

    $: rendered = ""

    // console.log(mithjs);

    const md = new MarkdownIt();
    // md.set({
    //     highlight
    // })
    md.use(mithjs, {inline: true});
    md.use(mk);

    async function loadFile(filename) {
        
        const mdFile = await Axios.get(`./files/${filename}`);

        // md.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$');
        rendered = md.render(String(mdFile.data));
    }

    selectedFile.subscribe(value => {
        if (value === null) return;
        console.log("RECEIVED", value)
        loadFile(value.file);
    })

</script>

{@html rendered }

