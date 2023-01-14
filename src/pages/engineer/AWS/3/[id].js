import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { AZURE2 } from '../../../../components/layout/engineer/engineer';
import hr from 'date-fns/locale/hr/index';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
         id == "" ? (
          <AZURE2>

          </AZURE2>
        ) : id == "azure_iaas" ? (
hr
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
