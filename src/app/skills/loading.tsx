'use client'

import { ColorRing } from  'react-loader-spinner'
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#3B82F6', '#ef4444', '#fcd34d', '#3B82F6', '#059669']}
/>
}