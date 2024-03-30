import React from 'react'
import styles from './Experience.module.css'
import skills from "../../Data/Skills.json"
import { getImageUrl } from '../../utlis'
import history from '../../Data/History.json'

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
          <div>{
            skills.map((skill,id)=>{
              return <div key={id}>
                <div>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
                </div>
            })
            }</div>
            <ul>
              {
                history.map((historyItem,id)=>{
                  return <li key={id}>
                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization}Logo`} />
                    <div>
                      <h3>{`${historyItem.role},${historyItem.organization}`}</h3>
                    </div>
                    <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                    
                    <ul>
                      {historyItem.experiences.map((experience,id)=>{
                        return <li key={id}>{experience}
                        </li>
                       } )}
                    </ul>
                  </li>
                  
                })
              }
            </ul>
      </div>
    </section>
  )
}
