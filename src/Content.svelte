<script>
    import MarkdownIt from 'markdown-it';
    import mk from 'markdown-it-katex';
    import mithjs from 'markdown-it-highlight';
    import Axios from 'axios';
    import { selectedFile } from './_util/stores';

    $: rendered = ""

    // init markdown and add syntax highlighting and katex support
    const md = new MarkdownIt();
    md.use(mithjs, {inline: true});
    md.use(mk);

    /**
     * Loads a specific file via GET HTTP Request and renders as markdown
     * 
     * @param filename
     */
    async function loadFile(filename) {   
        const mdFile = await Axios.get(`./files/${filename}`);
        rendered = md.render(String(mdFile.data));
    }

    /**
     * Implementation observer pattern to be aware of newly selected files
     */
    selectedFile.subscribe(value => {
        if (value === null) return;
        loadFile(value.file);
    })

</script>

{@html rendered }

