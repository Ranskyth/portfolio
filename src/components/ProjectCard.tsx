"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Button,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <SmartLink className={styles.cardLink}>
      <Column
        fillWidth
        gap="l"
        className={styles.projectCard}
      >
        {/* Title */}
        {title && (
          <Heading as="h3" wrap="balance" variant="heading-strong-m">
            {title}
          </Heading>
        )}

        {/* Description */}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}

        {link && (
          <SmartLink href={link} style={{ marginTop: "auto" }}>
            <Text variant="label-strong-s">Visualizar →</Text>
          </SmartLink>
        )}
      </Column>
    </SmartLink>
  );
};
