import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Male Avatar with Checkmark */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=CrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
              }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>

          {/* Green Checkmark Badge */}
          <View style={styles.checkBadge}>
            <Ionicons name="checkmark" size={16} color="#ffffff" />
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          {/* Name Field */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.valueText}>Diluka</Text>
          </View>

          {/* Email Field */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.iconRow}>
              <Ionicons name="mail" size={16} color="#000000" />
              <Text style={styles.valueText}>diluka.w@nsbm.ac.lk</Text>
            </View>
          </View>

          {/* Points Field */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Points</Text>
            <View style={styles.iconRow}>
              <Ionicons name="star" size={16} color="#000000" />
              <Text style={styles.valueText}>{points}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Floating Action Button (+) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => setPoints(points + 1)}
      >
        <Ionicons name="add" size={28} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#000000",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    marginBottom: 25,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 1.5,
    borderColor: "#ffccd5",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  checkBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    backgroundColor: "#00c853",
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    elevation: 3,
  },
  divider: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#000000",
    marginBottom: 20,
  },
  detailsContainer: {
    width: "100%",
    alignSelf: "stretch",
    gap: 18,
  },
  fieldBlock: {
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  valueText: {
    fontSize: 14,
    color: "#1f2937",
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 28,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
});
