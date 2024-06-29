import { css } from '@/styled-system/css'

const styles = {
  main: css({
    flex: '1',
    display: 'flex',
    flexDir: 'column',
    minH: '100%',
    p: 'fluid_3',
    bg: 'blueberry.7',
    color: 'blueberry.16',
    borderRadius: 'drawn_3',
    m: 'relative_10',
  }),
  inner: css({
    flex: 1,
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 'drawn_4',
    p: 'size_5',
    bg: 'blueberry.4',
    color: 'blueberry.16',
  }),
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan aliquam risus ac viverra. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ante lacus, efficitur nec
        tristique vel, pulvinar quis ante. Praesent egestas mauris vel felis ultricies tempus. Curabitur molestie nulla
        et dolor posuere aliquam. Fusce laoreet convallis ante malesuada aliquet.
        <br />
        <br />
        Sed eget enim sed metus lacinia elementum. Morbi interdum mauris a nibh hendrerit, eu posuere nulla tristique.
        Vivamus erat odio, tincidunt vitae scelerisque ut, euismod nec urna. Mauris eu ex vel quam vulputate placerat.
        Maecenas sollicitudin, ipsum ut rhoncus ultrices, urna leo cursus tortor, ut sodales ante risus quis enim.
        <br />
        <br />
        Donec euismod nisl ligula, ut sollicitudin magna ullamcorper at. Ut viverra sodales pretium. Duis pretium, ex
        sit amet aliquam dignissim, ex quam feugiat metus, quis tempus justo nibh nec arcu. Vivamus in tincidunt turpis.
      </div>
    </main>
  )
}
