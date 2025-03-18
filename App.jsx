import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';
import {
  Element3,
  Receipt21,
  Clock,
  Message,
  SearchNormal,
} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Galeri Seni Digital</Text>
        <Element3 color={colors.black()} variant="Linear" size={24} />
      </View>
<<<<<<< HEAD
=======

>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
      <View style={searchBar.container}>
        <TextInput style={searchBar.input} placeholder="Search" />
        <Pressable style={searchBar.button}>
          <SearchNormal size={20} color={colors.white()} />
        </Pressable>
      </View>
<<<<<<< HEAD
=======

>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
<<<<<<< HEAD
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Latest</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Technology</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Fashion</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Health</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Lifestyle</Text>
=======
              Populer
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Terbaru</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Ilustrasi</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>3D Art</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Pixel Art</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>AI-Generated</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Abstrak</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Cyberpunk</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>NFT Art</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Concept Art</Text>
>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
          </View>
        </ScrollView>
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});
const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.grey(0.03),
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: colors.blue(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
<<<<<<< HEAD
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1574770118700-4ed7dae3310e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1577048982768-5cb3e7ddfa23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Baking 101: Mastering the Art of Baking
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
=======
        <ScrollView>
          <View style={styles.listBlog}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{gap: 15}}>
              <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
                <ImageBackground
                  style={itemHorizontal.cardImage}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 15}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1744&q=80',
                  }}>
                  <View style={itemHorizontal.cardContent}>
                    <View style={itemHorizontal.cardInfo}>
                      <Text style={itemHorizontal.cardTitle}>Seni Abstrak</Text>
                      <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={itemHorizontal.cardItem}>
                <ImageBackground
                  style={itemHorizontal.cardImage}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 15}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f3?auto=format&fit=crop&w=774&q=80',
                  }}>
                  <View style={itemHorizontal.cardContent}>
                    <View style={itemHorizontal.cardInfo}>
                      <Text style={itemHorizontal.cardTitle}>
                        Lukisan Realisme
                      </Text>
                      <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={itemHorizontal.cardItem}>
                <ImageBackground
                  style={itemHorizontal.cardImage}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 15}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1532635241-19e94ac46cb0?auto=format&fit=crop&w=774&q=80',
                  }}>
                  <View style={itemHorizontal.cardContent}>
                    <View style={itemHorizontal.cardInfo}>
                      <Text style={itemHorizontal.cardTitle}>
                        Ekspresionisme
                      </Text>
                      <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
<<<<<<< HEAD
                uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
=======
                uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1770&q=80', // Seni abstrak warna-warni
>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
<<<<<<< HEAD
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
=======
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Seni Abstrak</Text>
                  <Text style={itemVertical.cardTitle}>
                    Ekspresi Warna dalam Kanvas
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Mei 15, 2024</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>120</Text>
              </View>
            </View>
          </View>

>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
<<<<<<< HEAD
                uri: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
=======
                uri: 'https://images.unsplash.com/photo-1605288991675-36ebbf1a8d85?auto=format&fit=crop&w=1770&q=80', // Lukisan klasik
>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
<<<<<<< HEAD
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    Boosting Traffic with SEO
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
=======
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Seni Lukis</Text>
                  <Text style={itemVertical.cardTitle}>
                    Sentuhan Klasik dalam Modernisasi
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Juni 10, 2024</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>85</Text>
              </View>
            </View>
          </View>

>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
<<<<<<< HEAD
                uri: 'https://images.unsplash.com/photo-1492683962492-deef0ec456c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1756&q=80',
=======
                uri: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1770&q=80', // Seni patung
>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
<<<<<<< HEAD
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Food</Text>
                  <Text style={itemVertical.cardTitle}>
                    Culinary Adventures: Exploring Exotic Flavors
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>Sneaker Culture</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Lifestyle</Text>
                  <Text style={itemVertical.cardTitle}>
                    Balancing Work and Well-being
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Health</Text>
                  <Text style={itemVertical.cardTitle}>
                    Home Fitness Revolution
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>
                    Intersection of Fashion
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
=======
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Seni Patung</Text>
                  <Text style={itemVertical.cardTitle}>
                    Kecantikan dalam Bentuk
                  </Text>
                </View>
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Juli 5, 2024</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>97</Text>
>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
<<<<<<< HEAD
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
=======
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Untuk efek bayangan di Android
    padding: 10,
  },
  cardCategory: {
    fontSize: 12,
    fontFamily: fontType['Pjs-SemiBold'],
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    color: '#fff',
    backgroundColor: 'linear-gradient(90deg, #ff6f61 0%, #de4463 100%)', // Warna gradasi
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: '#222',
    lineHeight: 22,
  },
  cardText: {
    fontSize: 11,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.7),
  },
  cardImage: {
    width: 100,
    height: 100,
>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
<<<<<<< HEAD
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
=======
    gap: 7,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
});

>>>>>>> efd89f1 ([BAB 2] KOMPONEN REACT NATIVE DAN TEXT HANDLING)
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
