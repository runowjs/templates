import { ColorModeButton } from '@/components/ui/color-mode';
import { Center, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <Center h="dvh" flexDir="column" gap={8}>
      <a href="https://chakra-ui.com/" target="_blank">
        <Image
          src="https://svgl.app/library/chakra-ui.svg"
          height={128}
          width={128}
          alt="antd logo"
          priority
        />
      </a>
      <Heading as="h1" size="4xl">
        React + Next.js + Chakra
      </Heading>
      <Text>
        Powered by{' '}
        <Link href="https://runow.dev" target="_blank" color="green.500">
          Runow
        </Link>
      </Text>
      <div>
        <ColorModeButton />
      </div>
    </Center>
  );
}
