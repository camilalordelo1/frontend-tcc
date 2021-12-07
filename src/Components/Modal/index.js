import './styles.css'

import { BtnDefaultPink1 } from '../../Components/_BtnsDefault/BtnDefaultPink1'
import dayjs from 'dayjs'

export function openModal() {
  const modal = document.getElementById('modalContainer')
  const body = document.body

  body.style.overflow = 'hidden'
  body.style.paddingRight = '15px'

  modal.style.display = 'block'
  modal.style.visibility = 'visible'


  setTimeout(() => {
    modal.style.opacity = 1
  }, 200);
}

export function closeModal() {
  const modal = document.getElementById('modalContainer')
  const body = document.body

  body.style.overflow = 'auto'
  body.style.paddingRight = '0px'

  modal.style.opacity = 0

  setTimeout(() => {
    modal.style.visibility = 'hidden'
    modal.style.display = 'none'
  }, 200)
}

function Modal({title, date, time, callback}) {  
  return (
    <div id="modalContainer">
      <div id="modalFilter"></div>
      <div id="modal" onClick={closeModal}>
        <aside id="modalBody" onClick={e => { e.stopPropagation() }}>
          <header>
            <h1>{title}</h1>
            <button type="button" id="closeButton" onClick={closeModal}>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </i>
            </button>
          </header>
          <section id="info">
            <p><strong>Paciente: </strong>Carlos Eduardo</p>
            <p><strong>Data: </strong>{dayjs(date).format('DD/MM/YYYY')}</p>
            <p><strong>Hora: </strong>{time}</p>
          </section>
          <section id="button">
            <BtnDefaultPink1 
              value="Desmarcar" 
              type="button"
              onClick={callback}
            />
          </section>
        </aside>
      </div>
    </div>
  )
}

export default Modal