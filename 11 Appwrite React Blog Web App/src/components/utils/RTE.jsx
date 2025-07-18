
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"
import config from "../../config/config"
function RTE({
        name,
        control,
        label,
        defaultValue =''
}) {

        return (
            <div className="w-full">
                {<label className="inline-block mb-1 pl-1" >{label}</label>}

                <Controller 
                        name={name}
                        control={control}
                        defaultValue={defaultValue}
                        render={({field:{onChange}})=>{
                                return (
                                        <Editor 
                                                apiKey={config.tinymceApiKey}
                                                initialValue={defaultValue}
                                                init={{
                                                        initialValue: defaultValue,
                                                        height: 300,
                                                        menubar: false,
                                                        plugins: [
                                                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                                                'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
                                                        ],
                                                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                         tinycomments_mode: 'embedded',
                                                        tinycomments_author: 'Author name',
                                                        mergetags_list: [
                                                        { value: 'First.Name', title: 'First Name' },
                                                        { value: 'Email', title: 'Email' },
                                                        ],
                                                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),

                                                }}
                                               
                                                onEditorChange={onChange}
                                        />
                                )
                        }}
                />
            </div>
        )

}

export default RTE