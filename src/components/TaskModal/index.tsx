import { Task } from "@/types/Task";

import {
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  MdOutlineCalendarMonth as CalendarIcon,
  MdNotes as DescriptionIcon,
  MdNumbers as IdentifierIcon,
  MdLocationPin as LocationIcon,
  MdPriorityHigh as PriorityIcon,
  MdOutlineFilePresent as AttachmentsIcon,
} from "react-icons/md";

import PriorityBadge from "../Badges/PriorityBadge";
import StatusBadge from "../Badges/StatusBadge";
import formatDate from "@/utils/formatDate";

interface TaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

export default function TaskModal({ task, isOpen, onClose }: TaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent borderRadius="lg">
        <ModalHeader pb={0}>{task?.name}</ModalHeader>

        <ModalCloseButton _focus={{ boxShadow: "none" }} />

        <ModalBody padding={6}>
          <StatusBadge status={task.status} />

          <VStack align="start" spacing={2} mt={4}>
            <HStack spacing={4}>
              <HStack color="#bfbebd">
                <Icon as={IdentifierIcon} />
                <Text>Task ID</Text>
              </HStack>

              <Text color="#37352f">#{task.id}</Text>
            </HStack>

            <HStack spacing={4}>
              <HStack color="#bfbebd">
                <Icon as={CalendarIcon} />
                <Text>Due date</Text>
              </HStack>

              <Text color="#37352f">{formatDate(task.date)}</Text>
            </HStack>

            <HStack spacing={4}>
              <HStack color="#bfbebd">
                <Icon as={LocationIcon} />
                <Text>Location</Text>
              </HStack>

              <Text color="#37352f">{task.location}</Text>
            </HStack>

            <HStack spacing={4}>
              <HStack color="#bfbebd">
                <Icon as={DescriptionIcon} />
                <Text>Description</Text>
              </HStack>

              <Text color="#37352f">{task.description}</Text>
            </HStack>

            <HStack spacing={4}>
              <HStack color="#bfbebd">
                <Icon as={AttachmentsIcon} />
                <Text>Attachments</Text>
              </HStack>

              <Text color="#37352f">{task.attachments?.join(", ")}</Text>
            </HStack>

            <HStack spacing={4}>
              <HStack color="#bfbebd">
                <Icon as={PriorityIcon} />
                <Text>Priority</Text>
              </HStack>

              <PriorityBadge priority={task.priority} />
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
