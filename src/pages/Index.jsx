import React from "react";
import { Box, Heading, VStack, HStack, Text, Link, Image, Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPlus, FaUserCircle } from "react-icons/fa";

const BookmarkItem = ({ title, url, icon, category, date }) => {
  return (
    <HStack p={4} justifyContent="space-between" bg={useColorModeValue("gray.100", "gray.700")} borderRadius="md" shadow="md" w="full">
      <HStack>
        <Image borderRadius="full" boxSize="40px" src={icon} alt={`${title} icon`} />
        <VStack alignItems="start">
          <Heading size="sm">{title}</Heading>
          <Text fontSize="xs">{category}</Text>
        </VStack>
      </HStack>
      <VStack alignItems="end">
        <Link href={url} isExternal color="blue.500">
          Visit
        </Link>
        <Text fontSize="xs">{date.toLocaleDateString()}</Text>
      </VStack>
    </HStack>
  );
};

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bookmarks = [
    // Placeholder bookmarks, normally you'd fetch these from your database
    {
      title: "Example Site",
      url: "https://example.com",
      icon: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaWNvbnxlbnwwfHx8fDE3MTA3NDk2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      category: "Personal",
      date: new Date(),
    },
    // ...more bookmarks
  ];

  return (
    <Box p={8}>
      <HStack justifyContent="space-between" mb={6}>
        <Heading>My Bookmarks</Heading>
        <HStack>
          <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} mr={4} />
          <IconButton aria-label="Account" icon={<FaUserCircle />} mr={4} />
          <Button leftIcon={<FaPlus />} colorScheme="blue">
            Add Bookmark
          </Button>
        </HStack>
      </HStack>
      <VStack spacing={4}>
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem key={index} {...bookmark} />
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
