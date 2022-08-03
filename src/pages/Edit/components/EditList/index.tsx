/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-08-02 07:21:03
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-08-02 07:49:34
 */
import styles from './index.module.scss'
type Props = {
  onClose:() => void,
  type:'' | 'gender' | 'photo',
  onUpData:(type:string,value:string) => void
}
const genderList = [{title:'男',value:'0'},{title:'女',value:'1'}]
const photoList = [{title:'拍照',value:'0'},{title:'本地选择',value:'1'}]

const EditList = ({onClose,type,onUpData}:Props) => {
  const list = type === 'gender' ? genderList : photoList
  return (
    <div className={styles.root}>
      {list.map(item => <div className="list-item" key={item.value} onClick={() => onUpData(type,item.value)}>{item.title}</div>)}

      <div className="list-item" onClick={onClose}>取消</div>
    </div>
  )
}

export default EditList
