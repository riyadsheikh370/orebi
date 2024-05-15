import React from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"

const Shop = () => {
  return (
    <>
      <section>
        <Container>
          <Flex>
            <div className="w-[20%]">Category</div>
            <div className="w-[80%]">Product</div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Shop
