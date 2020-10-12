/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from '@tailwindcssinjs/macro'
import { Button, Textarea } from '@chakra-ui/core'
import { useState } from 'react'

const styles = {
  subtitle: tw`
    my-3
    text-lg
  `,
  highlight: tw`
    mx-1
    py-2 px-4
    bg-teal-400
    border border-transparent
    text-sm leading-5 font-medium
    rounded-md
  `,
}

const dataset = [
  {
    type: 'Sexual Harassment',
    words: ['ห อ ม', 'คือลือ', 'ข อ บ คุ ณ ค รั บ'],
  },
  {
    type: 'Ableist Language',
    words: ['ปสด', 'ประสาทแดก'],
  },
]

const initialInput = [
  'คือลือ',
  'ห อ ม',
  'ข อ บ คุ ณ ค รั บ',
  'ขอบคุณครับ',
  'ประสาทแดก',
].join('\n')

export const Home = (): JSX.Element => {
  const [input, setInput] = useState(initialInput)
  const [output, setOutput] = useState([])

  function check() {
    const out = []

    dataset.forEach((data) => {
      data.words.forEach((word) => {
        if (input.includes(word)) {
          out.push({
            word,
            type: data.type,
          })
        }
      })
    })

    setOutput(out)
  }

  return (
    <div className="container">
      <main>
        <h1 className="title">Harassless</h1>

        <p css={styles.subtitle} data-testid="subtitle">
          ตรวจจับคำที่ส่อถึงการคุกคาม
        </p>

        <p className="description">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            h={40}
          />

          <Button onClick={check} my={4}>
            ตรวจสอบ
          </Button>
        </p>

        {!!output.length &&
          output.map((out, i) => {
            return (
              <p key={i}>
                {out.word} : {out.type}
              </p>
            )
          })}
      </main>

      <footer>
        <a
          href="https://github.com/narze/harassless"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
