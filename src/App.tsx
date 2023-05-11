import { useState } from 'react'
import './App.css'
import TableBodyCard from './TableBodyCard'

function App() {
  const amountOfStudent = 10
  const amountOfAspect = 4

  const [outputState, setOutputState] = useState<Record<string,Record<string,number>>|null>(null);

  type output = Record<string,Record<string,number>>

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const value = Object.fromEntries(data.entries())
    const transformedValue = transformToDictionary(value as Record<string, any>)
    console.log(transformedValue)
    setOutputState(transformedValue)
  }

  function onClick(e: any) {
    e.target.classList.add('clicked');
    setTimeout(() => {
      e.target.classList.remove('clicked');
    } , 100);


  }

    
  function transformToDictionary(data: Record<string, number>): output {
    const dictionary: output = {};
    for (const [key, value] of Object.entries(data)) {
      const studentId = key.split(".")[0].split("_")[1];
      const aspectId = key.split(".")[1].split("_")[1];
      if (!dictionary['aspek_penilaian_' + aspectId]) {
        dictionary['aspek_penilaian_' + aspectId] = {};
      }
      dictionary['aspek_penilaian_' + aspectId]['mahasiswa_' + studentId] = value;
    }
    return dictionary;
  }

  return (
    <>
      <div className='py-16'>
        <h1 className='heading mx-auto text-center'>
          Aplikasi Penilaian Mahasiswa
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='ds-table mx-auto px-4'>
          <div className='ds-table-header px-2 mb-6'>
            <div className='ds-table-header-col-empty' />
            {Array.from({ length: amountOfAspect }, (_, i) => i + 1).map(
              (_, i) => (
                <div key={i} className='ds-table-header-col-aspect'>
                  Aspek Penilaian {i + 1}
                </div>
              )
            )}
          </div>
          <div className='ds-table-body space-y-3'>
            {Array.from({ length: amountOfStudent }, (_, i) => i + 1).map(
              (_, i) => (
                <TableBodyCard key={i} studentName={`Mahasiswa ${i + 1}`} studentNumber={i + 1} />
              )
            )}
          </div>
          <div className='ds-submit-section py-8 text-right'>
            <input className='ds-btn px-4 transition-colors' type="submit" value="Simpan" onClick={(e) => onClick(e)} />
          </div>
          <div className={`ds-output p-4 my-20 ${outputState ? 'filled' : ''}`}>
            {/* print output in pre code */}
            <pre>
              {outputState ? JSON.stringify(outputState, null, 2) : "Output will be printed here" }
            </pre>
          </div>
        </div>
      </form>
      <div className="ds-footer p-4">
        Made with <span className="bigger">🫀</span> By Ivan Zulfikar
      </div>
    </>
  )
}

export default App
