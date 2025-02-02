import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function App() {

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailToInvite, setemailToInvite] = useState([

    'RolfgutZ@hotmail.com',
    'JuelhoIggle@hotmail.com',
    

  ])


  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {

    setIsGuestsInputOpen(false)
  }

  function openGuestsModalOpen() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    
    if (!email ) {
      return
    }

    if (emailToInvite.includes(email)){
      return
    }

    setemailToInvite([
      ...emailToInvite,
      email
    ])

    event.currentTarget.reset()

  }

  function removeEmailfromInvites(emailToRemove: string){
    const newEmailList = emailToInvite.filter(invited=>invited !== emailToRemove)

    setemailToInvite(newEmailList)
  }


  return (

    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="./logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua viagem </p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className='flex items-center gap-2 '>
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800'> </div>


            {isGuestsInputOpen ? (

              <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                <Settings2 />
                Alterar local/data
              </button>

            ) : (
              <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Continuar
                <ArrowRight className='size-5' />
              </button>
            )}

          </div>

          {isGuestsInputOpen && (

            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button type='button' onClick={openGuestsModalOpen}
                className='flex items-center gap-2 flex-1 text-left'>

                <UserRoundPlus className="size-5 text-zinc-400" />

                <span className='text-zinc-400 text-lg flex-1' > Quem estará na viagem?</span>

                <input type="text" placeholder="Quem estará na viagem?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </button>

              <div className='w-px h-6 bg-zinc-800'> </div>

              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar viagem
                <ArrowRight className='size-5' />
              </button>
            </div>

          )}

        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela planner voce autimaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#"></a> termos de us e <a className="text-zinc-300 underline" href="#">politicas de privacidade </a>
        </p>

      </div>

      {isGuestsModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5' >

            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
                <button type='button' onClick={closeGuestsModal}>
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
              <p className='text-sm text-zinc-400'>
                Os convidadaos irao receber e-mails para confirmar a particicao na viagem.
              </p>
            </div>

            <div className='flex flex-wrap gap-2'>
              {emailToInvite.map(email => {

                return (
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className='text-zinc-300'>{email}</span>
                    <button type='button' onClick={()=>removeEmailfromInvites(email)}>
                      <X className='size-4 text-zinc-400' />
                    </button>
                  </div>
                )
              })


              }
            </div>

            <div className='w-full h-px bg-zinc-800' />

            <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>

              <div className='px-2 flex items-center flex-1 gap-2'>
                <AtSign className='text-zinc-400 size-5 ' />
                <input 
                  type="email"
                  name='email' 
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
                />
              </div>

              <button type='submit' className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Convidar
                <Plus className='size-5' />
              </button>
            </form>

          </div>
        </div>

      )}

    </div>


  )
}

