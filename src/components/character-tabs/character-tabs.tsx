import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SkinIcon } from "@/components/icons/skin-icon"
import { CapeIcon } from "@/components/icons/cape-icon"
import { ArmorIcon } from "@/components/icons/armor-icon"
import { ArmorSelector } from "@/components/armor-selector"
import { DyeSelector } from "@/components/dye-selector"
import styles from "./character-tabs.module.css"

export const CharacterTabs = () => {
  return (
    <Tabs
      className={styles.tabs}
      orientation="vertical"
      defaultValue="armor"
    >
      <TabsList className={styles.tabList}>
        <TabsTrigger
          value="armor"
          asChild
        >
          <Button
            title="Armor"
            variant="ghost"
            square
            squareSize={64}
            className={styles.tabListTrigger}
          >
            <ArmorIcon size={42} />
          </Button>
        </TabsTrigger>

        <TabsTrigger
          value="skin"
          asChild
        >
          <Button
            title="Skin"
            variant="ghost"
            square
            squareSize={64}
            className={styles.tabListTrigger}
          >
            <SkinIcon size={55} />
          </Button>
        </TabsTrigger>
        <TabsTrigger
          value="cape"
          asChild
        >
          <Button
            title="Cape"
            variant="ghost"
            square
            squareSize={64}
            className={styles.tabListTrigger}
          >
            <CapeIcon size={42} />
          </Button>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="armor">
        <div className={styles.tabsContent}>
          <ArmorSelector />
          <DyeSelector />
        </div>
      </TabsContent>
      <TabsContent value="skin">
        <div>asd</div>
      </TabsContent>
      <TabsContent value="cape">
        <div>asdda</div>
      </TabsContent>
    </Tabs >
  )
}
