import './App.css'
import Container from './components/layout/Container/Container'
import Video from './components/feature/Video/Video'
import Description from './components/feature/Description/Description'
import Header from './components/layout/Header/Header'

function App() {
  return (
    <>
      <Header title='Playlist for David' />
      <div className='app'>
        <Container>
          <Video
            videoId='KI0ERvg8LI4'
            title='Farewell Ride'
            band='Beck'
            videoTitle='Beck - Farewell Ride'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='aJU4k1Lrhh0'
            title='Bad Ritual'
            band='Timber Timbre'
            videoTitle='Timber Timbre - Bad Ritual'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='6RpqAWPvhR8'
            title='Wanna'
            band='BRONCHO'
            videoTitle='BRONCHO - Wanna'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='iRXE3NNaiks'
            title='I Summon You'
            band='Spoon'
            videoTitle='Spoon - I Summon You'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='X61BVv6pLtw'
            title='Postcards from Italy'
            band='Beirut'
            videoTitle='Beirut - Postcards from Italy'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='zYwCmcB0XMw'
            title='New Slang'
            band='The Shins'
            videoTitle='The Shins - New Slang'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='NVdAZzrX0CY'
            title='Me and the Devil'
            band='Soap&Skin'
            videoTitle='Soap&Skin - Me and the Devil'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='qwoLACv_srQ'
            title='Someone Great'
            band='LCD Soundsystem'
            videoTitle='LCD Soundsystem - Someone Great'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='wycjnCCgUes'
            title='It Feels Like We Only Go Backwards'
            band='Tame Impala'
            videoTitle='Tame Impala - It Feels Like We Only Go Backwards'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='DXSY0aspgKo'
            title='Oh Comely'
            band='Neutral Milk Hotel'
            videoTitle='Neutral Milk Hotel - Oh Comely'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='PFxr5Ie3z_E'
            title="I'll Drown"
            band='Soley'
            videoTitle="Soley - I'll Drown"
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='N-oERBst8L0'
            title='I Lost Something in the Hills'
            band='Sibylle Baier'
            videoTitle='Sibylle Baier - I Lost Something in the Hills'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
        <Container>
          <Video
            videoId='lmc21V-zBq0'
            title='Run Boy Run'
            band='Woodkid'
            videoTitle='Woodkid - Run Boy Run'
          />
          <Description>
            <p>description goes here</p>
          </Description>
        </Container>
      </div>
    </>
  )
}

export default App
