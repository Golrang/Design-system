import { forwardRef } from 'react'
import { Upload as AntUpload } from 'antd'

import type { TUploader } from './uploader.types'

export const Uploader = forwardRef(
  ({ children, ...rest }: TUploader, ref?: any) => (
    <AntUpload {...rest} {...{ ref }}>
      {children}
    </AntUpload>
  )
)
