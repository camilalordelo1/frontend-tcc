import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

import './styles.css'

dayjs.extend(utc)
dayjs.extend(tz)

export default function AppointmentField({name, id, dateTime, children, className}) {
  return (
    <article className={`appointment ${className}`}>
      <header>
        <div>
          <h4>{name}</h4>
          <p>
            <strong>{`Consulta ${id}`}</strong>
          </p>
        </div>
      </header> 
      <p>
        {dayjs
          .utc(dateTime)
          .tz('America/Sao_Paulo')
          .format('DD/MM - HH:mm')}
      </p>
      <section>
        {children}
      </section>
    </article>
  )
}