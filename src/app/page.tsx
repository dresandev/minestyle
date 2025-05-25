import { CHARACTER_CONTAINER_ID } from "@/constants/dom"
import { MinecraftCharacterCanvas } from "@/components/minecraft-character-canvas"
import { LoadingScreen } from "@/components/LoadingScreen"
import { PanoramaCanvas } from "@/components/panorama-canvas"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Chestplate } from "@/components/icons/chestplate"
import { Skin } from "@/components/icons/skin"
import { Cape } from "@/components/icons/cape"
import { Button } from "@/components/ui/button"
import { Helmet } from "@/components/icons/helmet"
import { Leggins } from "@/components/icons/leggins"
import { Boots } from "@/components/icons/boots"
import { ArmorSet } from "@/components/icons/armor-set"
import styles from "./page.module.css"
import { Trim } from "@/components/icons/trim"
import { Material } from "@/components/icons/material"

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div
          id={CHARACTER_CONTAINER_ID}
          className={styles.wrapper}
        >
          <div className={styles.tabs}>
            <Tabs defaultValue="armor" className={styles.tabs}>
              <TabsList className={styles.tabList}>
                <TabsTrigger title="Armor" value="armor">
                  <Chestplate size={42} />
                </TabsTrigger>
                <TabsTrigger title="Skin" value="skin">
                  <Skin size={55} />
                </TabsTrigger>
                <TabsTrigger title="Cape" value="cape">
                  <Cape size={42} />
                </TabsTrigger>
              </TabsList>

              <TabsContent value="armor">
                <Button variant="ghost">
                  <Helmet />
                </Button>
                <Button variant="ghost">
                  <Chestplate />
                </Button>
                <Button variant="ghost">
                  <Leggins />
                </Button>
                <Button variant="ghost">
                  <Boots />
                </Button>
                <Button variant="ghost">
                  <ArmorSet />
                </Button>
                <Button variant="ghost">
                  <Trim />
                </Button>
                <Button variant="ghost">
                  <Material />
                </Button>
              </TabsContent>
              <TabsContent value="skin">skin</TabsContent>
              <TabsContent value="cape">cape</TabsContent>
            </Tabs>
          </div>
          <MinecraftCharacterCanvas />
        </div>
      </main>
      <LoadingScreen />
      <PanoramaCanvas />
    </>
  )
}
