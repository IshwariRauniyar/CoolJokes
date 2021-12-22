// import { createGlobalStyle } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   html {
//     box-sizing: border-box;
//   }
//   *,
//   *::before,
//   *::after {
//     box-sizing: inherit;
//   }
	
// 	h1 {
// 		color: black !important;
// 	}
// `;

// const BasicLayout = ({ children }: { children: any }) => {
//   return (
//     <>
//       <GlobalStyle />
//       {children}
//     </>
//   );
// };

// export default BasicLayout;

import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'CoolJokes' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
        <Link href='/'>
          <a>Home</a>
        </Link>
    </header>
    {children}
    <footer>
      <hr />
      <span>@Copyright ColJokes</span>
    </footer>
  </div>
)

export default Layout