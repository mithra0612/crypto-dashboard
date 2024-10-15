import {Box, HStack, Icon, Stack,Text} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";


const Sidenav = () => {
  const navLinks = [{
    icon:RxDashboard,
    text:"Dashboard",
    link:"/"
  },
  {
    icon:BsArrowDownUp,
    text:"Transactions",
    link:"/transactions"
  },
];
  return (<Stack boxShadow="sm">
    {navLinks.map((nav) => (
      <HStack key ={nav.text}>
        <Icon as = {nav.icon}/>
        <Text>{nav.text}</Text>
      </HStack>
    ))}
  </Stack>

)};

export default Sidenav;