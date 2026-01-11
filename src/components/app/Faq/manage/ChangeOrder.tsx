import { useDict } from "@/hooks/useDict";
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@heroui/react";
import { useQueryState } from "nuqs";
import { FaqOrderItem } from "./FaqOrderItem";
import { useChangeOrder } from "./useChangeOrder";

export const ChangeOrder = () => {
  const dict = useDict();
  const [changeOrder, setChangeOrder] = useQueryState("changeOrder");
  const { items, setItems, busy, handleSaveOrder } = useChangeOrder();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Drawer
      isOpen={!!changeOrder}
      onClose={() => setChangeOrder(null)}
      size="lg"
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">
          {dict.faq_page?.title}
        </DrawerHeader>
        <DrawerBody>
          {items.length === 0 ? (
            <div className="dark:text-dark-light-gray flex h-32 items-center justify-center text-gray-500">
              {dict.noData?.faqs || "No FAQs available"}
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={items.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="flex flex-col gap-3">
                  {items.map((faq, index) => (
                    <FaqOrderItem key={faq.id} faq={faq} index={index} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </DrawerBody>
        <DrawerFooter className="grid grid-cols-2">
          <Button
            color="default"
            variant="light"
            onPress={() => setChangeOrder(null)}
            className="bg-app-background text-black"
            size="lg"
          >
            {dict.common?.actions?.cancel}
          </Button>
          <Button
            color="primary"
            onPress={handleSaveOrder}
            isLoading={busy}
            disabled={busy}
            className="bg-app-primary text-white"
            size="lg"
          >
            {dict.common?.actions?.save}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
