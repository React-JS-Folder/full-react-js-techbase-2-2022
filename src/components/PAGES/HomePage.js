import React from 'react'
import './homepage.scss'
import styles from './exampleClass.module.scss'



export default function HomePage() {
   return (
      <div className="homepage__div">
         <h3 className={styles.importedClassFromModules}>HELLO WORLD, THIS IS HOME PAGE!!</h3>
      </div>
   )
}
