import React, { useEffect } from 'react'

const Main = () => {

    const [meme, setMeme] = React.useState(false)               // meme state

    const [memeImage, setMemeImage] = React.useState([])        // meme image
    const [topText, setTopText] = React.useState(null)          // top text
    const [bottomText, setBottomText] = React.useState(null)    // bottom text

    // const imageSrc = "https://i.imgflip.com/1bij.jpg" 

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes[Math.floor(Math.random() * data.data.memes.length)]))
    }, [topText, bottomText])

    function submitForm(formData) {
        const topText = formData.get("topText")
        const bottomText = formData.get("bttomText")

        setMeme(true)

        
        setTopText(topText)
        setBottomText(bottomText)
    }
    return (
        <main>

            <section>
                <div className="container mx-auto px-4">
                    <div className="py-4 space-y-6">
                        <form action={submitForm} className='flex flex-col gap-4 w-[50%] mx-auto'>
                            <div className="flex gap-2">
                                <div className='flex flex-col gap-2 w-full'>
                                    <label>Top text</label>
                                    <input type="text" name='topText' placeholder='Top text' className='p-2 border border-gray-400' required/>
                                </div>

                                <div className='flex flex-col gap-2 w-full'>
                                    <label>Bottom text</label>
                                    <input type="text" name='bttomText' placeholder='Bottom text' className='p-2 border border-gray-400' required/>
                                </div>
                            </div>

                            <button type='submit' className='p-2 border border-gray-400 bg-purple-400 hover:bg-purple-500 text-white animation ease-in-out duration-300 cursor-pointer' >Generate</button>
                        </form>

                        {meme && <div className="flex justify-center relative">
                          <p className='absolute top-4 text-5xl text-shadow-lg font-bold bg-yellow-400' >{topText}</p>
                            {/* {meme && <img src={meme.url} alt="meme" className='w-[50%]' />} */}
                            <img src={memeImage.url} alt="meme" className='w-[50%]' />
                          <p className='absolute bottom-4 text-5xl text-shadow-lg font-bold bg-yellow-400'>{bottomText}</p>
                        </div>}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main