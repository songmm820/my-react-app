import { Delta } from 'quill'
import { useRef } from 'react'
import Editor, { type EditorRef } from '~/components/features/Editor'
import { Button } from '~/components/ui/button'

const NotFound = () => {
    const editorRef = useRef<EditorRef>(null)

    return (
        <div className="w-full h-full flex flex-col gap-10">
            <Editor
                className="flex-1"
                ref={editorRef}
                value={new Delta()
                    .insert('Hello')
                    .insert('\n', { header: 1 })
                    .insert('Some ')
                    .insert('initial', { bold: true })
                    .insert(' ')
                    .insert('content', { underline: true })
                    .insert('\n')}
            />

            <Button
                onClick={() => {
                    console.log(editorRef?.current?.setContents(new Delta().insert('Hello')))
                }}
            >
                获取内容
            </Button>
        </div>
    )
}
export default NotFound
