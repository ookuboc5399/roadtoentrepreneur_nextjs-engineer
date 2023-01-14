import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PHP } from '../../../../components/layout/engineer/engineer';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "linux_detail" ? (
fhh
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
