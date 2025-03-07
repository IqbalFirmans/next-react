import React from "react"
import { Stack, Text } from "@chakra-ui/react"
import Link from "next/link"

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} passHref>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/posts">Posts</MenuItem> {/* Tambahkan ini */}
    </Stack>
  )
}

export default MenuLinks
