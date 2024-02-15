import Link from 'next/link';
import React from 'react';


export default function LinkPrefetchPage() {
  return (
    <div>
      <li>
        <Link href="/"  prefetch={false}>
          <a>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={false}>
          <a>
            Sobre
          </a>
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          <a>
            Link Prefetch
          </a>
        </Link>
      </li>
    </div>
  )
}
